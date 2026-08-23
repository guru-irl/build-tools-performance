import React from 'react';
const LABEL_43543 = 'component_43543';
export function Component43543({ value = 43543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43543, 'data-value': derived.doubled }, children);
}
export default Component43543;
