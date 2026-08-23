import React from 'react';
const LABEL_42406 = 'component_42406';
export function Component42406({ value = 42406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42406, 'data-value': derived.doubled }, children);
}
export default Component42406;
