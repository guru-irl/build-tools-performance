import React from 'react';
const LABEL_44003 = 'component_44003';
export function Component44003({ value = 44003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44003, 'data-value': derived.doubled }, children);
}
export default Component44003;
