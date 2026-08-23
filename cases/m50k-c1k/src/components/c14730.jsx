import React from 'react';
const LABEL_14730 = 'component_14730';
export function Component14730({ value = 14730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14730, 'data-value': derived.doubled }, children);
}
export default Component14730;
