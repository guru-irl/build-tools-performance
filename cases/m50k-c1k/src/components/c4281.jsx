import React from 'react';
const LABEL_4281 = 'component_4281';
export function Component4281({ value = 4281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4281, 'data-value': derived.doubled }, children);
}
export default Component4281;
