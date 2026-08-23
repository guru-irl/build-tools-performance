import React from 'react';
const LABEL_4770 = 'component_4770';
export function Component4770({ value = 4770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4770, 'data-value': derived.doubled }, children);
}
export default Component4770;
