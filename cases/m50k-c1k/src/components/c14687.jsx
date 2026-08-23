import React from 'react';
const LABEL_14687 = 'component_14687';
export function Component14687({ value = 14687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14687, 'data-value': derived.doubled }, children);
}
export default Component14687;
