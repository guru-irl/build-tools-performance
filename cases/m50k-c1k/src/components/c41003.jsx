import React from 'react';
const LABEL_41003 = 'component_41003';
export function Component41003({ value = 41003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41003, 'data-value': derived.doubled }, children);
}
export default Component41003;
