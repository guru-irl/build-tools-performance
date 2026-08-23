import React from 'react';
const LABEL_6492 = 'component_6492';
export function Component6492({ value = 6492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6492, 'data-value': derived.doubled }, children);
}
export default Component6492;
