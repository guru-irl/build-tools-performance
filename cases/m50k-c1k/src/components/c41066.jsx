import React from 'react';
const LABEL_41066 = 'component_41066';
export function Component41066({ value = 41066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41066, 'data-value': derived.doubled }, children);
}
export default Component41066;
