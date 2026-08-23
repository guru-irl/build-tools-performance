import React from 'react';
const LABEL_11186 = 'component_11186';
export function Component11186({ value = 11186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11186, 'data-value': derived.doubled }, children);
}
export default Component11186;
