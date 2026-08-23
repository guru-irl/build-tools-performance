import React from 'react';
const LABEL_16775 = 'component_16775';
export function Component16775({ value = 16775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16775, 'data-value': derived.doubled }, children);
}
export default Component16775;
