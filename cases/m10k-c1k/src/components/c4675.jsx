import React from 'react';
const LABEL_4675 = 'component_4675';
export function Component4675({ value = 4675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4675, 'data-value': derived.doubled }, children);
}
export default Component4675;
