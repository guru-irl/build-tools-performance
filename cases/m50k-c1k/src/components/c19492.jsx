import React from 'react';
const LABEL_19492 = 'component_19492';
export function Component19492({ value = 19492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19492, 'data-value': derived.doubled }, children);
}
export default Component19492;
