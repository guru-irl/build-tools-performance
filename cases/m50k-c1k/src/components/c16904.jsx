import React from 'react';
const LABEL_16904 = 'component_16904';
export function Component16904({ value = 16904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16904, 'data-value': derived.doubled }, children);
}
export default Component16904;
