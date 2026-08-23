import React from 'react';
const LABEL_41895 = 'component_41895';
export function Component41895({ value = 41895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41895, 'data-value': derived.doubled }, children);
}
export default Component41895;
