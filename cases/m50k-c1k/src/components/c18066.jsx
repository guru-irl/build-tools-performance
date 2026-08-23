import React from 'react';
const LABEL_18066 = 'component_18066';
export function Component18066({ value = 18066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18066, 'data-value': derived.doubled }, children);
}
export default Component18066;
