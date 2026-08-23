import React from 'react';
const LABEL_11704 = 'component_11704';
export function Component11704({ value = 11704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11704, 'data-value': derived.doubled }, children);
}
export default Component11704;
