import React from 'react';
const LABEL_10549 = 'component_10549';
export function Component10549({ value = 10549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10549, 'data-value': derived.doubled }, children);
}
export default Component10549;
