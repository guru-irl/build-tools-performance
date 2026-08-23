import React from 'react';
const LABEL_41316 = 'component_41316';
export function Component41316({ value = 41316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41316, 'data-value': derived.doubled }, children);
}
export default Component41316;
