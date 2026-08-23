import React from 'react';
const LABEL_43656 = 'component_43656';
export function Component43656({ value = 43656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43656, 'data-value': derived.doubled }, children);
}
export default Component43656;
