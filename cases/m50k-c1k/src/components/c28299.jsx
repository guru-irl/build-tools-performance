import React from 'react';
const LABEL_28299 = 'component_28299';
export function Component28299({ value = 28299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28299, 'data-value': derived.doubled }, children);
}
export default Component28299;
