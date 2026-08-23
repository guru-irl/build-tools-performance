import React from 'react';
const LABEL_4184 = 'component_4184';
export function Component4184({ value = 4184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4184, 'data-value': derived.doubled }, children);
}
export default Component4184;
