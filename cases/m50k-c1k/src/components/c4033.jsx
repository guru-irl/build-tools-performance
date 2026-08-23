import React from 'react';
const LABEL_4033 = 'component_4033';
export function Component4033({ value = 4033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4033, 'data-value': derived.doubled }, children);
}
export default Component4033;
