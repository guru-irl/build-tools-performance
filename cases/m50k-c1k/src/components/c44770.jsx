import React from 'react';
const LABEL_44770 = 'component_44770';
export function Component44770({ value = 44770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44770, 'data-value': derived.doubled }, children);
}
export default Component44770;
