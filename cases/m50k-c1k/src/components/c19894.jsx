import React from 'react';
const LABEL_19894 = 'component_19894';
export function Component19894({ value = 19894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19894, 'data-value': derived.doubled }, children);
}
export default Component19894;
