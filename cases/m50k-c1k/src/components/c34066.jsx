import React from 'react';
const LABEL_34066 = 'component_34066';
export function Component34066({ value = 34066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34066, 'data-value': derived.doubled }, children);
}
export default Component34066;
