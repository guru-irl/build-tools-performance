import React from 'react';
const LABEL_5492 = 'component_5492';
export function Component5492({ value = 5492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5492, 'data-value': derived.doubled }, children);
}
export default Component5492;
