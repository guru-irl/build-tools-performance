import React from 'react';
const LABEL_24259 = 'component_24259';
export function Component24259({ value = 24259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24259, 'data-value': derived.doubled }, children);
}
export default Component24259;
