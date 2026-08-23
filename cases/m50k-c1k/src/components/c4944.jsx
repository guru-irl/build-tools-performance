import React from 'react';
const LABEL_4944 = 'component_4944';
export function Component4944({ value = 4944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4944, 'data-value': derived.doubled }, children);
}
export default Component4944;
