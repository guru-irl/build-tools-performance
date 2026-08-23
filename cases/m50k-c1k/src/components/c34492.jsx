import React from 'react';
const LABEL_34492 = 'component_34492';
export function Component34492({ value = 34492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34492, 'data-value': derived.doubled }, children);
}
export default Component34492;
