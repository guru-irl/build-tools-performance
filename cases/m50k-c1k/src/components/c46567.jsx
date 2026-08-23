import React from 'react';
const LABEL_46567 = 'component_46567';
export function Component46567({ value = 46567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46567, 'data-value': derived.doubled }, children);
}
export default Component46567;
