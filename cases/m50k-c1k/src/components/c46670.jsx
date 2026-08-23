import React from 'react';
const LABEL_46670 = 'component_46670';
export function Component46670({ value = 46670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46670, 'data-value': derived.doubled }, children);
}
export default Component46670;
