import React from 'react';
const LABEL_25270 = 'component_25270';
export function Component25270({ value = 25270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25270, 'data-value': derived.doubled }, children);
}
export default Component25270;
