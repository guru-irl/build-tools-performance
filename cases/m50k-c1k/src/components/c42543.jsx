import React from 'react';
const LABEL_42543 = 'component_42543';
export function Component42543({ value = 42543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42543, 'data-value': derived.doubled }, children);
}
export default Component42543;
