import React from 'react';
const LABEL_36770 = 'component_36770';
export function Component36770({ value = 36770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36770, 'data-value': derived.doubled }, children);
}
export default Component36770;
