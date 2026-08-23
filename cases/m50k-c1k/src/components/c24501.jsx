import React from 'react';
const LABEL_24501 = 'component_24501';
export function Component24501({ value = 24501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24501, 'data-value': derived.doubled }, children);
}
export default Component24501;
