import React from 'react';
const LABEL_18770 = 'component_18770';
export function Component18770({ value = 18770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18770, 'data-value': derived.doubled }, children);
}
export default Component18770;
