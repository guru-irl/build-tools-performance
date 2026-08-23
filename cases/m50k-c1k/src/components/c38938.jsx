import React from 'react';
const LABEL_38938 = 'component_38938';
export function Component38938({ value = 38938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38938, 'data-value': derived.doubled }, children);
}
export default Component38938;
