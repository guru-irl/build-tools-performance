import React from 'react';
const LABEL_4720 = 'component_4720';
export function Component4720({ value = 4720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4720, 'data-value': derived.doubled }, children);
}
export default Component4720;
