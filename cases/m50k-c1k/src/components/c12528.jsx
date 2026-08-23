import React from 'react';
const LABEL_12528 = 'component_12528';
export function Component12528({ value = 12528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12528, 'data-value': derived.doubled }, children);
}
export default Component12528;
