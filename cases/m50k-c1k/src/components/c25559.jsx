import React from 'react';
const LABEL_25559 = 'component_25559';
export function Component25559({ value = 25559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25559, 'data-value': derived.doubled }, children);
}
export default Component25559;
