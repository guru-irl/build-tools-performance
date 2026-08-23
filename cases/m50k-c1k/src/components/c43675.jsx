import React from 'react';
const LABEL_43675 = 'component_43675';
export function Component43675({ value = 43675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43675, 'data-value': derived.doubled }, children);
}
export default Component43675;
