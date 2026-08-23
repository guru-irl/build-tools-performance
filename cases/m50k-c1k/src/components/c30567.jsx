import React from 'react';
const LABEL_30567 = 'component_30567';
export function Component30567({ value = 30567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30567, 'data-value': derived.doubled }, children);
}
export default Component30567;
