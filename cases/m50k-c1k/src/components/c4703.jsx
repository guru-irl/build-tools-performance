import React from 'react';
const LABEL_4703 = 'component_4703';
export function Component4703({ value = 4703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4703, 'data-value': derived.doubled }, children);
}
export default Component4703;
