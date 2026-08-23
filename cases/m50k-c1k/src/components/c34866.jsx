import React from 'react';
const LABEL_34866 = 'component_34866';
export function Component34866({ value = 34866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34866, 'data-value': derived.doubled }, children);
}
export default Component34866;
