import React from 'react';
const LABEL_41567 = 'component_41567';
export function Component41567({ value = 41567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41567, 'data-value': derived.doubled }, children);
}
export default Component41567;
