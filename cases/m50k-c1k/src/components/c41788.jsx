import React from 'react';
const LABEL_41788 = 'component_41788';
export function Component41788({ value = 41788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41788, 'data-value': derived.doubled }, children);
}
export default Component41788;
