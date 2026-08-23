import React from 'react';
const LABEL_4221 = 'component_4221';
export function Component4221({ value = 4221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4221, 'data-value': derived.doubled }, children);
}
export default Component4221;
