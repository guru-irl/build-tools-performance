import React from 'react';
const LABEL_37872 = 'component_37872';
export function Component37872({ value = 37872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37872, 'data-value': derived.doubled }, children);
}
export default Component37872;
