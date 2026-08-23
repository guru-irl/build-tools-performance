import React from 'react';
const LABEL_40316 = 'component_40316';
export function Component40316({ value = 40316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40316, 'data-value': derived.doubled }, children);
}
export default Component40316;
