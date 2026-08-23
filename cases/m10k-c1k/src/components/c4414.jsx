import React from 'react';
const LABEL_4414 = 'component_4414';
export function Component4414({ value = 4414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4414, 'data-value': derived.doubled }, children);
}
export default Component4414;
