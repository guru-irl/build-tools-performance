import React from 'react';
const LABEL_28011 = 'component_28011';
export function Component28011({ value = 28011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28011, 'data-value': derived.doubled }, children);
}
export default Component28011;
