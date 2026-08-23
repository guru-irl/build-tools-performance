import React from 'react';
const LABEL_41780 = 'component_41780';
export function Component41780({ value = 41780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41780, 'data-value': derived.doubled }, children);
}
export default Component41780;
