import React from 'react';
const LABEL_37567 = 'component_37567';
export function Component37567({ value = 37567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37567, 'data-value': derived.doubled }, children);
}
export default Component37567;
