import React from 'react';
const LABEL_13670 = 'component_13670';
export function Component13670({ value = 13670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13670, 'data-value': derived.doubled }, children);
}
export default Component13670;
