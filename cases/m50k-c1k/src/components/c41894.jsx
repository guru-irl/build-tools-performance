import React from 'react';
const LABEL_41894 = 'component_41894';
export function Component41894({ value = 41894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41894, 'data-value': derived.doubled }, children);
}
export default Component41894;
